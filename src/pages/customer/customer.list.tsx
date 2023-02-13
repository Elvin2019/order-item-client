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
  };

  const handleAddCustomer = async (values: Partial<ICustomer>) => {
    await CustomerRepository.createCustomer(values);
    refetchCustomers();
    handleClose();
  };

  const handleEditCustomer = (customerId: string) => {
    // handle edit customer functionality
  };

  const handleDeleteCustomer = (customerId: string) => {
    // handle delete customer functionality
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
                      <IconButton onClick={() => handleEditCustomer(customer.id)}>
                        {' '}
                        <Edit />{' '}
                      </IconButton>
                      <IconButton onClick={() => handleDeleteCustomer(customer.id)}>
                        {' '}
                        <Delete />{' '}
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
          <CustomerForm onSave={handleAddCustomer} onClose={handleClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CustomerList;
