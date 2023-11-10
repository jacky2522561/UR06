import Accordion from "../components/Accordion";

const AccordionPage = () => {
    const items = [
        {
            id:'kdidwdwd',
            label:'label 1',
            content: 'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG'
        },
        {
            id:'ckoackapoc',
            label:'label 2',
            content: 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGGG'
        },
        {
            id:'smdkams',
            label:'label 3',
            content: 'HHHHHHHHHHHHHHHHGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG'
        }
    ]
    return <Accordion items={items}/>
}

export default AccordionPage;