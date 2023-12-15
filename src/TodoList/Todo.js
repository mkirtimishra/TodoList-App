import React, { useState , useEffect } from "react";
import './style.css';

const getLocalData=()=>{
  const lists=localStorage.getItem("mytodo");
    if(lists){
      return JSON.parse(lists); //it convert string into array
    }
    else{
      return [];
    }
};

const Todo = () => {
    const [inputdata, setInputData] = useState("");
    const [inputlist, setInputList] = useState(getLocalData());
    const [isEditItem, setIsEditItem]= useState("");
    const [toggelButton, setToggelButton]= useState(false);
    //  const addItemList=()=>{
    //     <div className='showItems'>
    //     <div className='eachItem'>
    //         <h3>{inputdata}</h3>
    //         <div className='todo-btn'>
    //            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
    //            <i class="fa fa-trash" aria-hidden="true"></i>
    //         </div>
    //     </div>
    // </div>
    // }

    const addItem=()=>{
        if(!inputdata){
          window.alert("pls fill the data");
          return;
        }
        else if(toggelButton){
          setInputList(inputlist.map((curEle)=>{
            if(curEle.id===isEditItem)
              return {...curEle, name: inputdata};
            return curEle;
          }))
          setInputData("");
          setIsEditItem(null);
          setToggelButton(false);
        }
        else{
          //addItemList();
          const myNewInputData={
            id:new Date().getTime().toString(),
            name:inputdata
          };
          setInputList( [...inputlist, myNewInputData]);
          setInputData("");
          return;
        }
    }

    const editItem=(id)=>{
        const afterEdit = inputlist.find((curelem)=>{
          return curelem.id===id;
        })
        setInputData(afterEdit.name);
        setIsEditItem(id);
        setToggelButton(true);
    }

    const deleteItem=(id)=>{
       const afterDel = inputlist.filter((curelem)=>{
        return curelem.id!==id; 
       });
       setInputList(afterDel);
    }

    const removeAll=()=>{
        setInputList([]);
    }

    //adding localStorage
    useEffect(()=>{
     localStorage.setItem("mytodo", JSON.stringify(inputlist));
    }, [inputlist]);

  return (
    <>
    
       
       <div className='main-div'>
           <div className='child-div'>

            <figure>
                <img src='../image/todo.svg' alt='logo'/>
                {/* window+. for icons */}
                <figcaption>Add Your List Here ✌</figcaption>  
            </figure>

            <div className='addItems'>
                <input type="text" placeholder='✍ Add Item' className='form-control' 
                value={inputdata} onChange={(event) => setInputData(event.target.value)}   />
                <i className="fa fa-plus" aria-hidden="true" onClick={()=>addItem()}></i>
            </div>

            
                <div className='showItems'>
                  {inputlist.map((curEle)=>{
                    return(
                    <div className='eachItem'>
                    <h3>{curEle.name}</h3>
                    <div className='todo-btn'>
                       <i class="fa fa-pencil-square-o" aria-hidden="true" onClick={()=>editItem(curEle.id)} ></i>
                       <i class="fa fa-trash" aria-hidden="true" onClick={()=>deleteItem(curEle.id)} ></i>
                    </div>
                    </div> 
                    );
                  })}
                </div>
            
             
            <div className='showItems'>
                <button className='btn effect04' data-sm-link-text=" Remove All" onClick={()=>removeAll()} >
                    <span>Check List</span>
                </button>
            </div>

           </div>
       </div>
    </>
  )
}

export default Todo



// import React, { useState } from "react";
// import "./style.cs44444444444444444s";

// // get the localStorage data back
// // const getLocalData = () => {
// //   const lists = localStorage.getItem("mytodolist");

// //   if (lists) {
// //     return JSON.parse(lists);
// //   } else {
// //     return [];
// //   }
// // };

// const Todo = () => {
//   const [inputdata, setInputData] = useState("");
// //   const [items, setItems] = useState(getLocalData());
// //   const [isEditItem, setIsEditItem] = useState("");
// //   const [toggleButton, setToggleButton] = useState(false);

//   // add the items fucnction
// //   const addItem = () => {
// //     if (!inputdata) {
// //       alert("plz fill the data");
// //     } else if (inputdata && toggleButton) {
// //       setItems(
// //         items.map((curElem) => {
// //           if (curElem.id === isEditItem) {
// //             return { ...curElem, name: inputdata };
// //           }
// //           return curElem;
// //         })
// //       );

// //       setInputData("");
// //       setIsEditItem(null);
// //       setToggleButton(false);
// //     } else {
// //       const myNewInputData = {
// //         id: new Date().getTime().toString(),
// //         name: inputdata,
// //       };
// //       setItems([...items, myNewInputData]);
// //       setInputData("");
// //     }
// //   };

// //   //edit the items
// //   const editItem = (index) => {
// //     const item_todo_edited = items.find((curElem) => {
// //       return curElem.id === index;
// //     });
// //     setInputData(item_todo_edited.name);
// //     setIsEditItem(index);
// //     setToggleButton(true);
// //   };

// //   // how to delete items section
// //   const deleteItem = (index) => {
// //     const updatedItems = items.filter((curElem) => {
// //       return curElem.id !== index;
// //     });
// //     setItems(updatedItems);
// //   };

// //   // remove all the elements
// //   const removeAll = () => {
// //     setItems([]);
// //   };

// //   // adding localStorage
// //   useEffect(() => {
// //     localStorage.setItem("mytodolist", JSON.stringify(items));
// //   }, [items]);

//   return (
//     <>
//       <div className="main-div">
//         <div className="child-div">
//           <figure>
//             <img src="./images/todo.svg" alt="todologo" />
//             <figcaption>Add Your List Here ✌</figcaption>
//           </figure>
//           <div className="addItems">
//             <input
//               type="text"
//               placeholder="✍ Add Item"
//               className="form-control"
//               value={inputdata}
//               onChange={(event) => setInputData(event.target.value)}
//             />
//               <i className="fa fa-plus add-btn" ></i>
            
//           </div>
//           {/* show our items  */}
//           <div className="showItems">
           
//                 <div className="eachItem" >
//                   <h3>App</h3>
//                   <div className="todo-btn">
//                     <i
//                       className="far fa-edit add-btn"
//                       ></i>
//                     <i
//                       className="far fa-trash-alt add-btn"
//                       ></i>
//                   </div>
//                 </div>
              
           
//           </div>

//           {/* rmeove all button  */}
//           <div className="showItems">
//             <button
//               className="btn effect04"
//               data-sm-link-text="Remove All"
//               >
//               <span> CHECK LIST</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Todo;








