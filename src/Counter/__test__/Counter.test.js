import React from 'react';
import Counter from '../Counter';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

let getByTestId;

beforeEach(() => {
    const componest = render(<Counter />);
    getByTestId = componest.getByTestId;
})

afterEach(() => {
    cleanup()
})

test("header text test", ()=> {
    const headerEl = getByTestId("header");

    expect(headerEl.textContent).toBe("My Counter");
});

// 检测counter初始值是否为0
test('counter initally start is 0', ()=> {
    const counterEl = getByTestId("counter");

    expect(counterEl.textContent).toBe("0");
});

// 检测input框初始值是否为1
test('input contains inital value of 1', ()=> {
    const inputEl = getByTestId("input");

    // 检测input框的值不是textContent是value
    expect(inputEl.value).toBe("1");
});

// button按钮是否显示 ' + '
test('add button renders with +', ()=> {
    const addBtn = getByTestId("add-btn");

    expect(addBtn.textContent).toBe("+");
});

test('subtract button renders with -', ()=> {
    const subtractBtn = getByTestId("subtract-btn");

    expect(subtractBtn.textContent).toBe("-");
});

// input框改变的值是否正确
test('change input value correctly', ()=> {
    const inputEl = getByTestId("input");

    expect(inputEl.value).toBe("1");

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    });

    expect(inputEl.value).toBe("5")
});

// 点击加号按钮是否实现结果
test('click plus btn adds 1 to counter', () => {
    const counterEl = getByTestId("counter");
    const addBtnEl = getByTestId("add-btn");

    expect(counterEl.textContent).toBe("0")

    fireEvent.click(addBtnEl);

    expect(counterEl.textContent).toBe("1")
})

test('click subtract btn subtracts 1 to counter', () => {
    const counterEl = getByTestId("counter");
    const subtractBtnEl = getByTestId("subtract-btn");

    expect(counterEl.textContent).toBe("0")

    fireEvent.click(subtractBtnEl);

    expect(counterEl.textContent).toBe("-1")
})

// 点击按钮之后counter值是否正确显示
test('changing conter correctly then ckick addBtn', () => {
    const counterEl = getByTestId("counter");
    const addBtnEl = getByTestId("add-btn");
    const inputEl = getByTestId("input");

    fireEvent.change(inputEl, {
        target: {
            value: 5
        }
    });

    fireEvent.click(addBtnEl);

    expect(counterEl.textContent).toBe("5")
})

test('changing conter correctly then ckick subtractBtn', () => {
    const counterEl = getByTestId("counter");
    const subtractBtnEl = getByTestId("subtract-btn");
    const inputEl = getByTestId("input");

    fireEvent.change(inputEl, {
        target: {
            value: 5
        }
    });

    fireEvent.click(subtractBtnEl);

    expect(counterEl.textContent).toBe("-5")
})

// 检测classname是否正确显示
test('counter contains correct classname', () => {
    const counterEl = getByTestId("counter");

    expect(counterEl.className).toBe('');
})