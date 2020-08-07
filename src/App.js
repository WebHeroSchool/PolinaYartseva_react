import React from 'react';

const element = (<div>
Hello, World!
<a href="">to go</a>
</div>);

const ItemList = () => (<ul>
        <li>1</li>
        <li>2</li>
    </ul>);

const App = () => (<div>
    <h1>Hello, World 2</h1>
    <ItemList />
    </div>);

export {element};

export default App;