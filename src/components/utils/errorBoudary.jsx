/* Подключать модуль в app.js как оборачивающий компонент для всего приложения
    <ErrorBoundary>
      <AppHeader />
      <AppMain data={ingredientsData}/>
    </ErrorBoundary>
*/

import React from "react";
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // с помощью этого метода меняем стейт компонента при возникновении ошибки:
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // с помощью этого метода логируем информацию об ошибке:
  componentDidCatch(error, info) {
    console.log("Возникла ошибка!", error, info);
  }

  render() {
    if (this.state.hasError) {
      // если возникла ошибка, сообщаем об этом пользователю в специальном компоненте:
      return (
        <section>
          <h1>Что-то пошло не так :(</h1>
          <p>
            В приложении произошла ошибка. Пожалуйста, перезагрузите страницу.
          </p>
        </section>
      );
    }
    // если всё работает штатно, рендерим дочерние компоненты
    return this.props.children;
  }
}

/*
Для отлова ошибок в обработчиках использовать
try catch согласно примеру: 

function ComponentWithError() {
  const [error, setError] = useState(null);

  const handleClick = () => {
    try {
      // В этом случае в хэндлере точно возникнет ошибка
      throw new Error("Simple error");
    } catch (err) {
      // Обычно ошибки логируются или обрабатываются дополнительной логикой,
      // но для наглядности мы просто кладём ошибку в стейт
      setError(err.message);
    }
  };

  return (
    <div className="App">
      <h1>{error}</h1>
      <button onClick={handleClick}>Make a mistake</button>
    </div>
  );
}

*/
