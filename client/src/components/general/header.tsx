import * as React from 'react';
import { ColorPaletteProp } from '@mui/joy/styles';
import Badge from '@mui/joy/Badge';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Dropdown from '@mui/joy/Dropdown';
import Input from '@mui/joy/Input';
import IconButton from '@mui/joy/IconButton';
import ListDivider from '@mui/joy/ListDivider';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Chip from '@mui/joy/Chip';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonIcon from '@mui/icons-material/Person';
import ListAltSharpIcon from '@mui/icons-material/ListAltSharp';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';
import { useFormModal } from '@/hooks/use-form-modal';

export default function Header() {
  const [color, setColor] = React.useState<ColorPaletteProp>('primary');
  // onClick={() => {
  //   const colors: ColorPaletteProp[] = [
  //     'primary',
  //     'neutral',
  //     'danger',
  //     'success',
  //     'warning',
  //   ];
  //   const nextColorIndex = colors.indexOf(color) + 1;
  //   setColor(colors[nextColorIndex] ?? colors[0]);
  // }}
  const {
    onOpen
  } = useFormModal()

  return (
    <Sheet
      variant="solid"
      color={'primary'}
      invertedColors
      sx={{
        position: 'sticky',
        zIndex: 100,
        top: 0, 
        display: 'flex',
        alignItems: 'center',
        flexGrow: 1,
        p: 2,
        // borderRadius: { xs: 0, sm: 'sm' },
        minWidth: 'min-content',
        ...(color !== 'warning' && {
          background: (theme) =>
            `linear-gradient(to top, ${theme.vars.palette[color][600]}, ${theme.vars.palette[color][500]})`,
        }),
      }}
    >
      <Link to=''>
        <div className='h'>
          Home
        </div>
      </Link>
      <Box sx={{ flex: 1, display: 'flex', gap: 1, px: 2 }}>
        <Button
            // startDecorator={<PersonIcon />}
            sx={{ display: { xs: 'none', md: 'inline-flex' } }}
        >
          Login
        </Button>
        <Dropdown>
          <MenuButton
            sx={{
              '--Button-radius': '1.5rem',
            }}
            variant="outlined"
            endDecorator={<KeyboardArrowDownIcon />}
          >
            Main
          </MenuButton>
          <Menu
            variant="outlined"
            placement="bottom-start"
            disablePortal
            size="sm"
            sx={{
              '--ListItemDecorator-size': '24px',
              '--ListItem-minHeight': '40px',
              '--ListDivider-gap': '4px',
              minWidth: 200,
            }}
          >
            <MenuItem>
              <ListItemDecorator>
                <BubbleChartIcon />
              </ListItemDecorator>
              Products
            </MenuItem>
            <ListDivider />
            <MenuItem>Pricing</MenuItem>
            <MenuItem>
              Case studies{' '}
              <Chip
                variant="outlined"
                size="sm"
                sx={{
                  ml: 'auto',
                  bgcolor: (theme) =>
                    `rgba(${theme.vars.palette[color].mainChannel} / 0.4)`,
                }}
              >
                Beta
              </Chip>
            </MenuItem>
          </Menu>
        </Dropdown>
      </Box>
      <Box sx={{ display: 'flex', flexShrink: 0, gap: 2 }}>
        {/* <HashLink smooth to='/#register'> */}
          <Button
            onClick={onOpen}
            startDecorator={<ListAltSharpIcon />}
            sx={{ display: {md: 'inline-flex'}}}
          >
            Register
          </Button>
        {/* </HashLink> */}
        <Link to='/login'>
          <Button
            startDecorator={<PersonIcon />}
            sx={{ display: {xs: 'none', md: 'inline-flex' } }}
          >
            Login
          </Button>
        </Link>
        <Input
          placeholder="Search"
          variant="soft"
          size="sm"
          endDecorator={
            <Typography
              component="span"
              variant="outlined"
              level="body-xs"
              sx={{ bgcolor: 'background.surface', mx: 0 }}
            >
              ⌘K
            </Typography>
          }
          sx={{
            '--Input-paddingInline': '12px',
            width: 160,
            display: { xs: 'none', lg: 'flex' },
          }}
        />
        <Link to='/announcement'>
          <Tooltip title="Announcement">
            <Badge badgeContent={2} variant="solid" color="danger">
              <IconButton variant="soft" sx={{ borderRadius: '50%' }}>
                <NotificationsIcon />
              </IconButton>
            </Badge>
          </Tooltip>
        </Link>
      </Box>
    </Sheet>
  );
}
