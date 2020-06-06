// example.tsx
function hyperscript(nodeName, attributes, ...children)
{
    children = [].concat(...children);
    return { nodeName, attributes, children };
}

function render(vdom)
{
    let dom:HTMLElement = document.createElement(vdom.nodeName);
    for (let key of (vdom.attributes || {}))
    {
        dom.setAttribute(key, vdom.attributes[key]);
    }

    for (let child of vdom.children)
    {
        if (typeof child === 'string')
        {
            dom.appendChild(document.createTextNode(child));
        }
        else
        {
            dom.appendChild(render(child));
        }
    }
    return dom;
}


class Example
{
    static bros:string[] = [ 'Scott', 'Seth', 'Bob', 'Joe' ];

    static listBros(): string[]
    {
        return Example.bros.map(bro => <li>{bro.toUpperCase()}</li>);
    }
}

let avettBros = (<div id="avettBros">
    <h1>The Amazing Avett Brothers<span>!</span></h1>
    <ul>
        <li>--start--</li>
        { Example.listBros() }
        <li>--end--</li>
    </ul>
</div>);

var dom = render(avettBros);
document.body.appendChild(dom);
