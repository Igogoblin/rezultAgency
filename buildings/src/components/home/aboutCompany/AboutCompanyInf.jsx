const aboutTitle = ["Аренда", "Купля-продажа", "Управление"];
const aboutDesc = [
    "Широкий выбор объектов: Мы предлагаем разнообразные варианты аренды – от квартир и домов до коммерческих помещений, удовлетворяющие любые потребности  Надежные арендаторы: Проведение тщательной проверки и отбора арендаторов для обеспечения стабильного дохода и минимизации рисков",
    "Здесь текст для вкладки Купля-продажа",
    "Управление - что входит и что это такое"
]

function AboutCompanyInf() {
    const [currentIndex, setCurrentIndex]= useState(0);
    const goToIndex = (index)=>{
        setCurrentIndex(index);
    }
    const nextSlide = () => {
        setCurrentIndex((prevIndex)=>{
            prevIndex===aboutDesc.length-1?0:prevIndex+1;
        });
    };
    const prevSlide = () => {
        setCurrentIndex((prevIndex)=>{
            prevIndex===0?aboutDesc.length-1?prevIndex-1;
        })
    }
  return (
    <div>
      
    </div>
  )
}

export default AboutCompanyInf
