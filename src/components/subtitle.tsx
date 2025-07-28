interface subTitleProps {
 subtitle : string
}

const SubTitle = ({subtitle }: subTitleProps) =>{
 return(
  <div>
    <h4 className="UPPERCASE font-bold mb-5 text-center text-3xl  text-gray-400 mt-4">{subtitle}</h4>
  </div>
 )
}

export default SubTitle;