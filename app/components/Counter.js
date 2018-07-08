var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as React from 'react';
import { Link } from 'react-router-dom';
// import * as orm from 'typeorm'
let styles = require('./Counter.scss');
export class Counter extends React.Component {
    componentDidMount() {
        return __awaiter(this, void 0, void 0, function* () {
            // try {
            //   const data = {
            //     name: 'Roman'
            //   }
            //   await orm.getRepository('user').save(data)
            //   const result = await orm.getRepository('user').find()
            //   console.log(result)
            // } catch (e) {
            //   console.log(e)
            // }
        });
    }
    render() {
        const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
        return (React.createElement("div", null,
            React.createElement("div", { className: styles.backButton, "data-tid": "backButton" },
                React.createElement(Link, { to: "/" },
                    React.createElement("i", { className: "fa fa-arrow-left fa-3x" }))),
            React.createElement("div", { className: `counter ${styles.counter}`, "data-tid": "counter" }, counter),
            React.createElement("div", { className: styles.btnGroup },
                React.createElement("button", { className: styles.btn, onClick: increment, "data-tclass": "btn" },
                    React.createElement("i", { className: "fa fa-plus" })),
                React.createElement("button", { className: styles.btn, onClick: decrement, "data-tclass": "btn" },
                    React.createElement("i", { className: "fa fa-minus" })),
                React.createElement("button", { className: styles.btn, onClick: incrementIfOdd, "data-tclass": "btn" }, "odd"),
                React.createElement("button", { className: styles.btn, onClick: () => incrementAsync(), "data-tclass": "btn" }, "async"))));
    }
}
export default Counter;
