export const Widget = (props) => {
  return (
    <div id='widget'>
      {props.data
        ? props.data.map((d, i) => (
          <div key={`${d.name}-${i}`} className='col-md-4'>
            {' '}
            <div className="wpp">
            <a target="blank" href="https://wa.me/5541998419824?text=Olá%2C+gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+os+planos+da+UpFlow.">
             <img src={d.img} className='wpp' alt=''/>
             
            </a>

            </div>

          </div>
        ))
        : 'Loading'}
    </div>
  )
}
