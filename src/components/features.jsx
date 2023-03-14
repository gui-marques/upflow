export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Serviços</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-6 col-md-3'>
                  {' '}
                 {/* <i className={d.icon}></i>
                  <i className={d.icon2}></i>
                  <i className={d.icon3}></i>  */}
                  <img src={d.img} alt='' />{' '}
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                  {d.link && <a href={d.link} target="blank">Saiba mais</a>}
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
