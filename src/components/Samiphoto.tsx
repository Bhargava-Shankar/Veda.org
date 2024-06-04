import kanchi from "../assets/kanchi.jpg";
import om from "../assets/om.jpg";
const Samiphoto = () => {
  return (
      <div className='h-max flex flex-row  justify-evenly w-full justify-center mb-10 mt-5'>
              <img src={om} alt=""  className='h-[28rem] scale-75'/>
          <div>
              <img src={kanchi} alt="" />
          </div>
             <img src={om} alt=""  className='h-[28rem] scale-75'/>
    </div>
  )
}

export default Samiphoto
