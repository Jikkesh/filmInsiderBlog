import React, { useState ,useEffect } from 'react';
import './TrendingScrollBar.css'; // Import your CSS file
import { Card, Button, Rate  } from "antd";
import image1 from "./assets/jawanTrending.jpg";
import image2 from "./assets/TigerTrending.jpeg";
import image3 from "./assets/VidamuyarchiTrending.jpg";
import image4 from "./assets/LeoTrending.jpg";
import image5 from "./assets/Rolex.jpg_large";
import { PlayCircleOutlined , LeftOutlined , RightOutlined  } from '@ant-design/icons';

const { Meta } = Card;

const TrendingScrollBar = () => {
  const boxSets = [
    [
      {
        id: 1,
        image: image1,
        title: "Jawan",
      },
      {
        id: 2,
        image: image2,
        title: 'Tiger',
      },
      {
        id: 3,
        image: image3,
        title: 'Vidamuyarchi',
      },
      {
        id: 4,
        image: image4,
        title: 'Leo',
      },
      {
        id: 5,
        image: image5,
        title: 'Rolex',
      },
      
    ],
    // Add more sets of 5 boxes as needed
  ];

  const size = "large"; // Define the size of the button

  const [currentSet, setCurrentSet] = useState(boxSets.length - 1);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);

  useEffect(() => {
    // Check if left button should be shown
    setShowLeftButton(currentSet > 0);

    // Check if right button should be shown
    setShowRightButton(currentSet < boxSets.length - 1);
  }, [currentSet , boxSets.length]);

  const handleNextClick = () => {
    // Increment the current set index, and loop back to the first set if it exceeds the available sets.
    setCurrentSet((currentSet + 1) % boxSets.length);
  };

  const handlePrevClick = () => {
    // Decrement the current set index, and loop back to the last set if it goes below 0.
    setCurrentSet((currentSet - 1 + boxSets.length) % boxSets.length);
  };

  return (
    <div className='trending-container'>
      <div className='box-container-wrapper'>
        <h2 className="whatsCooking-title">What's Cookin' ?</h2>
        {showLeftButton && (
          <Button className='prev-button'  size={size} icon = {<LeftOutlined />}  onClick={handlePrevClick}>
          </Button>
        )}
        <div className='box-container'>
          {boxSets[currentSet].map((box) => (
            <Card
              key={box.id}
              hoverable
              className='card'
              cover={<img alt={box.title} src={box.image} />}
            >
            <Rate className='rate-star' allowHalf defaultValue={2.5} /> 

              <Meta title={box.title} />

              <Button className='card-button' type="primary" shape="round" size={size} icon={<PlayCircleOutlined />} alt="trailer">
              </Button>
            </Card>
          ))}
        </div>
        {showRightButton && (
          <Button className='next-button' size={size} icon = {<RightOutlined/>} onClick={handleNextClick}>
          </Button>
        )}
      </div>
    </div>
  );
};
export default TrendingScrollBar;
