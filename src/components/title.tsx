interface titleProps {
 title : string
}

const Title = ({title }: titleProps) =>{
 return(
  <div>
    <h1 className="UPPERCASE font-bold mb-10 text-center text-3xl">{title}</h1>
  </div>
 )
}

export default Title;