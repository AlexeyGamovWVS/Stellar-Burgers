import React, { ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };
  // с помощью этого метода меняем стейт компонента при возникновении ошибки:
  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }
  // с помощью этого метода логируем информацию об ошибке:
  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log("Возникла ошибка!", error, info);
  }

  render() {
    if (this.state.hasError) {
      // если возникла ошибка, сообщаем об этом пользователю в специальном компоненте:
      return (
        <section>
          <h1 className="text text_type_main-large m-10">Что-то пошло не так :(</h1>
          <p className="text text_type_main-medium text_color_inactive m-10">
            В приложении произошла ошибка. Пожалуйста, перезагрузите страницу.
          </p>
        </section>
      );
    }
    // если всё работает штатно, рендерим дочерние компоненты
    return this.props.children;
  }
}
