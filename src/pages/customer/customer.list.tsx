import { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from '@material-ui/core';
import { AddCircle, Delete, Edit } from '@material-ui/icons';
import { ICustomer } from '../../models/customer';
import { CustomerRepository } from '../../repository/customer.repository';
import CustomerForm from './customer.form';
import LoadingTable from '../../components/loading-table';

const CustomerList = () => {
  const [customers, setCustomers] = useState<ICustomer[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState<ICustomer | null>(null);

  const refetchCustomers = async () => {
    setLoading(true);
    const costumers = await CustomerRepository.getCustomers();
    setCustomers(costumers);
    setLoading(false);
  };

  useEffect(() => {
    refetchCustomers();
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCustomer(null);
  };

  const onSave = async (values: Partial<ICustomer>) => {
    if (values.id) {
      await CustomerRepository.updateCustomer(values.id, {
        name: values.name,
        address: values.address,
        phoneNumber: values.phoneNumber,
        emailAddress: values.emailAddress,
      });
    } else {
      await CustomerRepository.createCustomer(values);
    }
    await refetchCustomers();
    handleClose();
  };

  const handleEditCustomer = (customer: ICustomer) => {
    setSelectedCustomer(customer);
    handleOpen();
  };

  const handleDeleteCustomer = async (customerId: string) => {
    await CustomerRepository.deleteCustomer(customerId);
    await refetchCustomers();
  };

  return (
    <div>
      {loading ? (
        <LoadingTable />
      ) : (
        <>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>No</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell>Phone Number</TableCell>
                  <TableCell>Email Address</TableCell>
                  <TableCell align="center">
                    <IconButton onClick={handleOpen}>
                      {' '}
                      <AddCircle />{' '}
                    </IconButton>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {customers.map((customer, index) => (
                  <TableRow key={customer.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{customer.name}</TableCell>
                    <TableCell>{customer.address}</TableCell>
                    <TableCell>{customer.phoneNumber}</TableCell>
                    <TableCell>{customer.emailAddress}</TableCell>
                    <TableCell align="center">
                      <IconButton onClick={() => handleEditCustomer(customer)}>
                        <Edit />
                      </IconButton>
                      <IconButton onClick={() => handleDeleteCustomer(customer.id)}>
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Add Customer</DialogTitle>
        <DialogContent>
          <CustomerForm onSave={onSave} onClose={handleClose} initialValues={selectedCustomer} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CustomerList;
