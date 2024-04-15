import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

type ButtonProps = {
  title: string;
  onClick: () => void;
};

export const MainButton = ({ title, onClick }: ButtonProps) => {
  return (
    <Stack direction="row">
      <Button
        variant="outlined"
        startIcon={<LocalMallOutlinedIcon />}
        type="button"
        onClick={onClick}
        className="bg-[#0f52ba] text-white w-full h-10 rounded-b-lg hover:bg-[#0f52ba]"
      >
        {title}
      </Button>
    </Stack>
  );
};
