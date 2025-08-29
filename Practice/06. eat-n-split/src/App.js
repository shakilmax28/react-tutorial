import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [showSplitBill, setSplitBill] = useState(false);
  const [selectFriend, setSelectFriend] = useState({
    id: "",
    friendName: "",
  });

  function handleBill(billing) {
    console.log("billing: " + JSON.stringify(billing));
    console.log("friends: " + JSON.stringify(friends));
    const newFriends = friends.map((friend) =>
      String(friend.id) === String(billing.user)
        ? {
            id: friend.id,
            name: friend.name,
            image: friend.image,
            balance: friend.balance + Number(billing.bill),
          }
        : friend
    );
    setFriends(newFriends);
    console.log("newFriends: " + JSON.stringify(newFriends));
  }

  function handleShowAddFriend() {
    setShowAddFriend((s) => !s);
  }

  function handleSplitBill(friend) {
    if (friend.id === selectFriend.id) {
      setSplitBill((bill) => !bill);
      setSelectFriend({
        id: "",
        friendName: "",
      });
    } else {
      const updateSelectFriend = {
        id: friend.id,
        friendName: friend.name,
      };
      setSelectFriend(updateSelectFriend);
      setSplitBill(true);
    }
  }

  function handleNewFriend(friend) {
    const newFriends = [...friends, friend];
    setFriends(newFriends);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          showBill={handleSplitBill}
          selectFriend={selectFriend}
        />
        <FormAddFriend
          showAddFriend={showAddFriend}
          addNewFriend={handleNewFriend}
        />
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      <FormSplitBill
        showBill={showSplitBill}
        setBill={setSplitBill}
        setSelectFriend={setSelectFriend}
        selectFriend={selectFriend}
        handleBill={handleBill}
      />
    </div>
  );
}

function FriendList({ friends, showBill, selectFriend }) {
  return (
    <ul>
      {friends.map((f) => (
        <Friend
          friend={f}
          key={f.id}
          showBill={showBill}
          selectFriend={selectFriend}
        />
      ))}
    </ul>
  );
}

function Friend({ friend, showBill, selectFriend }) {
  return (
    <>
      <li>
        <img src={friend.image} alt={friend.name}></img>
        <h3>{friend.name}</h3>
        {friend.balance > 0 ? (
          <p className="red">
            You owe {friend.name} {friend.balance}$
          </p>
        ) : friend.balance < 0 ? (
          <p className="green">
            {friend.name} owe you {friend.balance}$
          </p>
        ) : (
          <p>You and {friend.name} are even</p>
        )}
        <Button onClick={() => showBill(friend)}>
          {selectFriend.id === friend.id ? "Close" : "Select"}
        </Button>
      </li>
    </>
  );
}

function FormAddFriend({ showAddFriend, addNewFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    console.log("id: " + id);

    const newFriend = {
      name,
      image: `${image}?=${id}`,
      balance: 0,
      id: id,
    };

    setName("");
    setImage("https://i.pravatar.cc/48");

    addNewFriend(newFriend);
  }

  return showAddFriend ? (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👭 Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>

      <label>🖼 Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      ></input>

      <Button>Add</Button>
    </form>
  ) : (
    <div></div>
  );
}

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

function FormSplitBill({
  showBill,
  setBill,
  setSelectFriend,
  selectFriend,
  handleBill,
}) {
  const [totalBill, setTotalBill] = useState(0);
  const [friendExpense, setFriendExpense] = useState(0);
  const [myExpense, setMyExpense] = useState(0);
  const [whosPaying, setWhosPaying] = useState("user");

  function onHandleTotalBill(value) {
    value = Number(value);
    setTotalBill(value);
    setFriendExpense(value - myExpense);
  }

  function onHandleMyExpense(value) {
    value = Number(value);
    setMyExpense(value);
    setFriendExpense(totalBill - value);
  }

  function onHandleSumit(e) {
    e.preventDefault();
    if (whosPaying === "user") {
      const bill = {
        bill: -friendExpense,
        user: selectFriend.id,
      };
      handleBill(bill);
    } else {
      const bill = {
        bill: myExpense,
        user: selectFriend.id,
      };
      handleBill(bill);
    }

    setTotalBill(0);
    setMyExpense(0);
    setFriendExpense(0);
    setWhosPaying("user");
    setBill(false);
    setSelectFriend({
      id: "",
      friendName: "",
    });
  }

  return showBill ? (
    <form className="form-split-bill" onSubmit={(e) => onHandleSumit(e)}>
      <h2>Split a bill with {selectFriend.friendName}</h2>
      <label>💰 Bill Value</label>
      <input
        type="text"
        value={totalBill}
        onChange={(e) => onHandleTotalBill(e.target.value)}
      ></input>

      <label>🕴 Your Expense</label>
      <input
        type="text"
        value={myExpense}
        onChange={(e) => onHandleMyExpense(e.target.value)}
      ></input>

      <label>👭 X's Expense</label>
      <input type="text" value={friendExpense} disabled></input>

      <label>🤑 Who's paying the bill</label>
      <select onChange={(e) => setWhosPaying(e.target.value)}>
        <option value="user">You</option>
        <option value={selectFriend.id}>{selectFriend.friendName}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  ) : (
    <></>
  );
}
