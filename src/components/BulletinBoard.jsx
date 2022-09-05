import ReactPost from './ReactPost';

const BulletinBoard = () => {
	let posts = [
		{
			question: "Vad är tre fördelar med att använda React?",
			answer: "1)Flexibel.Den modulära strukturen hos ReactJS gör det till ett av de bästa flexibla verktygen som finns. Detta förenklar supporten, vilket sparar mycket utvecklingstid samt pengar på lång sikt. Applikationer byggda med detta verktyg är mycket skalbara, underhållsbara och mycket flexibla. 2)Det är intuitivt. React JS hjälper till att skapa enkel och intuitiv kod så att du kan undvika oförutsägbara scenarier. Biblioteket erbjuder kraftfull tillstånds-, action- och händelsehantering. Även om det är enkelt, ger ReactJS full kontroll till utvecklarna om hur det ska bete sig på användarnas handlingar. Biblioteket är i sig intuitivt och möjliggör interaktivitet till användargränssnittets layout. 3) Lätt att lära / lätt att använda. Ingen av teknikerna är lätta att lära sig, men det finns gott om handledningar och utbildningsresurser tillgängliga för dem som vill lära sig React. Dessutom är det lättare att lära sig för den som redan har erfarenhet av JavaScript."
		},
		{
			question: "Vad betyder Single Page Application och vad skiljer det från en “vanlig” webbplats?",
			answer: "SPA är en app som fungerar i en webbläsare och som inte kräver att sidan laddas om under användning. Det är bara en webbsida som du besöker som sedan laddar allt annat innehåll med hjälp av JavaScript – vilket de är mycket beroende av. SPA begär uppmärkning och data oberoende och renderar sidor direkt i webbläsaren. Vi kan göra detta tack vare de avancerade JavaScript-ramverken som AngularJS, Ember.js, Meteor.js, Knockout.js. En Multi-page Application är en webbapplikation som består av ett stort antal sidor som helt uppdateras varje gång data ändras på dem. Varje dataändring eller dataöverföring till servern leder till en ny sida som visas i webbläsaren."
		},
		{
			question: "Nämn tre skillnader mellan React och Angular.",
			answer: "React är ett bibliotek, men Angular är ett fullfjädrat ramverk. Den virtuella DOM- och envägsdatabindningen används av React.js, men den verkliga DOM- och tvåvägsdatabindningen används av Angular. Det finns också en hastighetsskillnad (Reacts är snabbare) och en skillnad i buntstorlek (Reacts är mindre) (React fungerar lite snabbare). Angular använder tvåvägsdatabindning och React använder envägsdatabindning."
		}
	];
	return (
		<div className='bulletin_board_wrapper'>
			{
				posts.map((post, index) =>{
					return <ReactPost key={index} question = {post.question} answer={post.answer}/>
				})
			}
		</div>
	)
}

export default BulletinBoard;