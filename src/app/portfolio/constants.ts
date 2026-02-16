import vigoPol from '@/assets/images/polVigo.jpeg'
import vigoPol1 from '@/assets/images/krovlyaVigo1.jpeg'
import vigoFloor from '@/assets/images/krovlyaVigo.jpeg'
import ip from '@/assets/images/krovlya1.jpg'

export const portfolioList = [
  {
    id: 1,
    title: 'Устройство промышленных полов',
    image: [vigoPol, vigoPol1],
    description:
      'Устройство топпинговых полов. Выполнена планировка  с последующим устройсвом топпинговых полов. Работы выполнены согласно договору в срок.',
    orderer: 'Мебельная компания "Виго',
    square: 1490,
  },
  {
    id: 2,
    title: 'Устройство мягкой кровли промышленного склада',
    image: [vigoFloor],
    description:
      'Устройство мембранной кровли. Монтаж фасонных элементов по периметру кровли. Работы сданы согласно договору, несмотря на неполную готовность кровли.',
    orderer: 'Мебельная компания "Виго',
    square: 1490,
  },
  {
    id: 3,
    title: 'Устройство мягкой кровли магазина.',
    image: [ip],
    description:
      'В проекте наплавляемая кровля. Помогли заказчику с выбором и заказом материалов.Предоставли все необходимые технические решения.',
    orderer: 'ИП Митрофанов',
    square: 1490,
  },
]
