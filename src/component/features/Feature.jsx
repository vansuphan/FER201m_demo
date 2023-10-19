import proSolving from '../../asserts/image/proSolving.png'
import liveChat from '../../asserts/image/liveChat.png'
import groupReading from '../../asserts/image/groupReading.png'
import tenk from '../../asserts/image/10k.png'
import hardActivities from '../../asserts/image/hardActivities.png'

export default function Feature() {
  return (
    <div className='row justify-content-between gy-3 mt-5 mb-5'>
      <div className='col-md-2 col-sm-6'>
        <div className='d-flex align-items-center p-2' style={{ background: "#DDFFFF", borderRadius: 5 }}>
          <img src={proSolving} alt="" />
          <div className='ms-3'>Problem Solving</div>
        </div>
      </div>
      <div className='col-md-2 col-sm-6'>
        <div className='d-flex align-items-center p-2' style={{ background: "#DDFFFF", borderRadius: 5 }}>
          <img src={liveChat} alt="" />
          <div className='ms-3'>Live Chat</div>
        </div>
      </div>
      <div className='col-md-2 col-sm-6'>
        <div className='d-flex align-items-center p-2' style={{ background: "#DDFFFF", borderRadius: 5 }}>
          <img src={groupReading} alt="" />
          <div className='ms-3'>Group Reading</div>
        </div>
      </div>
      <div className='col-md-2 col-sm-6'>
        <div className='d-flex align-items-center p-2' style={{ background: "#DDFFFF", borderRadius: 5 }}>
          <img src={tenk} alt="" />
          <div className='ms-3'>10k Courses</div>
        </div>
      </div>
      <div className='col-md-2 col-sm-6'>
        <div className='d-flex align-items-center p-2' style={{ background: "#DDFFFF", borderRadius: 5 }}>
          <img src={hardActivities} alt="" />
          <div style={{ whiteSpace: "nowrap" }} className='ms-3'>Hard-on activities</div>
        </div>
      </div>
    </div>
  )
}