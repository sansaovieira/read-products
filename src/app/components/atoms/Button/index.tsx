import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import Button from '@mui/material/Button';

type ButtonProps = {
  title: string;
  onClick: () => void;
};

export const MainButton = ({ title, onClick }: ButtonProps) => {
  return (
    <Button
      variant="outlined"
      startIcon={<LocalMallOutlinedIcon />}
      type="button"
      onClick={onClick}
      style={{
        backgroundColor: '#0f52ba',
        color: 'white',
        width: '100%'
      }}
    >
      {title}
    </Button>
  );
};
