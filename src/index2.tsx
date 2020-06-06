// function hyperscript(nodeName, attributes, ...children)
// {
//     children = [].concat(...children);
//     return { nodeName, attributes, children };
// }

// function render(vdom)
// {
//     let dom:HTMLElement = document.createElement(vdom.nodeName);
//     for (let key of (vdom.attributes || {}))
//     {
//         dom.setAttribute(key, vdom.attributes[key]);
//     }

//     for (let child of vdom.children)
//     {
//         if (typeof child === 'string')
//         {
//             dom.appendChild(document.createTextNode(child));
//         }
//         else
//         {
//             dom.appendChild(render(child));
//         }
//     }
//     return dom;
// }



class Avetts
{
   constructor()
   {
      return (<h1>My name is Stephen, and I love the Avett Brothers!</h1>);
   }
}

let myApp = (<div id="myApp">
   <p>Welcome to my app</p>
   <Avetts />
   <p>This is the end of my app</p>
</div>);

var dom = render(avettBros);
document.body.appendChild(dom);

/* TODO:
fix configuration to make this work
*/
