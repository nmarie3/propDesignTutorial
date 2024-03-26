import Accordion from './components/Accordion'



function App() {
    const items = [
        {
            id: "eeeee",
            label: "Question 1",
            content: "ccndjcncas cansnddjd jdjdjdjdjdjdjq lqlalalala aaa aaa aaaaaaiiii iiiiiiii iccc ccc cccccc cne",
        },
        {
            id: "aaaaa",
            label: "Question 2",
            content: "ccndjcncas cansnddjd jdjdjdjdjdjdjq lqlalalala aaa aaa aaaaaaiiii iiiiiiii iccc ccc cccccc cne",
        },
        {
            id: "wwwww",
            label: "Question 3",
            content: "ccndjcncas cansnddjd jdjdjdjdjdjdjq lqlalalala aaa aaa aaaaaaiiii iiiiiiii iccc ccc cccccc cne",
        }
    ];



return (
    <Accordion items={items}/>
)

}

export default App;