import Button from '@mui/material/Button';
import Universe from "../../../public/5a50e84d57b6812fe10efbb5a2dbc58feb9da4b0.png";
import Cards from "./cards"
const Hero = () => {
  return (<>
    <div className="relative bg-[url('/Background.jpg')] bg-cover bg-center bg-no-repeat min-h-[80vh] px-10 md:px-20 py-4">
    <div className="  flex items-center text-white ">
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Content container with max-width and padding */}
      <div className="container mx-auto md:px-4 p-0 z-10 flex flex-col lg:flex-row items-center justify-between gap-12 py-16">
        {/* Text content (left side) */}
        <div className="max-w-2xl text-center lg:text-left">
          <h1 className="text-2xl  md:text-4xl font-bold mb-6 leading-tight">
            1IGS exemplifies its dedication to sustainability through innovative procurement and supply chain practices that boost operational efficiency and drive industry-leading innovation
          </h1>
          <p className="text-lg md:text-md mb-8 opacity-90">
            1IGS is committed to delivering high-quality products on time, every time.
          </p>
          <Button 
            variant="contained" 
            size="large"
            sx={{
              padding: '12px 24px',
              fontSize: '1rem',
              fontWeight: 'bold',
              textTransform: 'none',
              backgroundColor:"white",
              color:"black",
              '&:hover': {
                transform: 'scale(1.05)',
                transition: 'transform 0.2s'
              }
            }}
          >
            BOOK A MEETING →
          </Button>
        </div>

        {/* Image (right side) */}
        <div className="w-full lg:w-auto mt-10 md:mt-0 flex justify-center">
          <img 
            src={Universe} 
            alt="1IGS Universe Illustration" 
            className="max-w-full h-auto md:max-w-md lg:max-w-lg rotate-[-90deg]"
          />
        </div>
      </div>
    </div>
      <div>
      <p className='!text-white text-lg pl-5'>Seamless Solutions, Endless Possibilities</p>
      <Cards/>
    </div>
    </div>
  </>);
};

export default Hero;