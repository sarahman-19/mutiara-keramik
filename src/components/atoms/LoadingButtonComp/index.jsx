import { LoadingButton } from '@mui/lab';
import {Button} from '@mui/material';

const LoadingButtonComp = (props) => {
  if(props.loadingStatus){
    return (
        <LoadingButton loading loadingIndicator="Loading..." variant="outlined">
          {props.title}
        </LoadingButton>
      );
  }

  return(
    <Button onClick={props.handleSubmit} variant="contained">{props.title}</Button>
  )
};

export default LoadingButtonComp;
