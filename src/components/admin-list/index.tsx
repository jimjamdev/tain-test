import DeleteIcon from '@mui/icons-material/Delete';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { FunctionComponent } from 'react';

interface IAdminList {
  data: [];
  remove: any;
}

export const AdminList: FunctionComponent<IAdminList> = ({ data, remove }) => {
  return (
    <List>
      {data &&
        data.map((item: any, index: number) => {
          return (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemText primary={item.name} />
                <ListItemIcon onClick={() => remove(index)}>
                  <DeleteIcon />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          );
        })}
    </List>
  );
};
