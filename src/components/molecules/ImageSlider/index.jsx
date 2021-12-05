import { Carousel } from "antd";
import 'antd/dist/antd.css';

const ImageSlider = (props) => {
  return (
    <Carousel autoplay>
      <div>
        <img src="https://placeimg.com/640/300/arch" alt="gambar1" />
      </div>
      <div>
      <img src="https://placeimg.com/640/300/nature" alt="gambar1" />
      </div>
      <div>
      <img src="https://placeimg.com/640/300/any" alt="gambar1" />
      </div>
      <div>
      <img src="https://placeimg.com/640/300/people" alt="gambar1" />
      </div>
    </Carousel>
  );
};

export default ImageSlider;
