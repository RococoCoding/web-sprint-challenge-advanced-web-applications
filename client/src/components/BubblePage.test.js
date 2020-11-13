import React from "react";
import { render, screen, waitFor} from "@testing-library/react";
import BubblePage from "./BubblePage";
import {loadColors as mockLoadColors} from "./loadColors";

jest.mock('./loadColors')
let data = {data: [
    {
      color: "aliceblue",
      code: {
        hex: "#f0f8ff"
      },
      id: 1
    },
    {
      color: "limegreen",
      code: {
        hex: "#99ddbc"
      },
      id: 2
    },
    {
      color: "aqua",
      code: {
        hex: "#00ffff"
      },
      id: 3
    },
]};

test("Fetches data and renders the bubbles", async () => {
  mockLoadColors.mockResolvedValueOnce(data)
  render(<BubblePage />)

  await waitFor(()=> {

    screen.getByText(/bubbles/i)
    screen.getByText(/aliceblue/i) //added code to render color as text in circle in Bubbles.js testid doesn't work for some reason. Could also use role.
  })
//  screen.getAllByTestId("circle")



});
