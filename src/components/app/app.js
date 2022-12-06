import ErrorBoundary from "../errorBoundary/errorBoudary";
import AppHeader from "../header/header";
import AppMain from "../main/main";

function App() {
	return (
		<ErrorBoundary>
			<AppHeader />
			<AppMain />
		</ErrorBoundary>
	);
}

export default App;
