import AppHeader from "../components/header/header";
import AppMain from "../components/main/main";
import IngredientMain from "../components/fullingredient/fullingredient";
import Registration from "../components/registration/registration/registration";

export function HomePage() {
	return (
		<>
		 <AppHeader />
		 <AppMain />
		 <IngredientMain />
		 <Registration />
		</>
	)
}
