const ChildComponent = (props: any) => {
    return (
        <div className="border rounded-3xl text-center p-5 m-5 w-3/12 bg-slate-400">
            <h3 className="text-5xl py-1">
                {props.student}</h3>
            <h6 className="py-1">
                {props.rollnumber}</h6>
            <h6 className="py-1">
                {props.location}</h6>
        </div>
    )
  }
  
  export default ChildComponent