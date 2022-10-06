import { render, screen } from "@testing-library/react";
import Album, { stickers as albumStickers } from "../pages/album";
import Alone, { stickers as aloneStickers } from "../pages/alone";
import Angel, { stickers as angelStickers } from "../pages/angel";
import Bond, { stickers as bondStickers } from "../pages/bond";
import Boss, { stickers as bossStickers } from "../pages/boss";
import Chat, { stickers as chatStickers } from "../pages/chat";
import Cheese, { stickers as cheeseStickers } from "../pages/cheese";
import Guild, { stickers as guildStickers } from "../pages/guild";
import { pageLinks } from "../components/header";
import Home from "../pages/index";
import Produce, { stickers as produceStickers } from "../pages/produce";
import Rotation, { stickers as rotationStickers } from "../pages/rotation";
import Shiritori, { stickers as shiritoriStickers } from "../pages/shiritori";
import Valentine, { stickers as valentineStickers } from "../pages/valentine";

test("album.tsx", () => {
  render(<Album />);
  for (let e of albumStickers) {
    const name = screen.queryByText(e.name);
    expect(name).not.toBeNull();
    const image = screen.queryByAltText(e.name);
    expect(image).not.toBeNull();
  }
});

test("alone.tsx", () => {
  render(<Alone />);
  for (let e of aloneStickers) {
    const name = screen.queryByText(e.name);
    expect(name).not.toBeNull();
    const image = screen.queryByAltText(e.name);
    expect(image).not.toBeNull();
  }
});

test("angel.tsx", () => {
  render(<Angel />);
  for (let e of angelStickers) {
    const name = screen.queryByText(e.name);
    expect(name).not.toBeNull();
    const image = screen.queryByAltText(e.name);
    expect(image).not.toBeNull();
  }
});

test("bond.tsx", () => {
  render(<Bond />);
  for (let e of bondStickers) {
    const name = screen.queryByText(e.name);
    expect(name).not.toBeNull();
    const image = screen.queryByAltText(e.name);
    expect(image).not.toBeNull();
  }
});

test("boss.tsx", () => {
  render(<Boss />);
  for (let e of bossStickers) {
    const name = screen.queryByText(e.name);
    expect(name).not.toBeNull();
    const image = screen.queryByAltText(e.name);
    expect(image).not.toBeNull();
  }
});

test("chat.tsx", () => {
  render(<Chat />);
  for (let e of chatStickers) {
    const name = screen.queryByText(e.name);
    expect(name).not.toBeNull();
    const image = screen.queryByAltText(e.name);
    expect(image).not.toBeNull();
  }
});

test("cheese.tsx", () => {
  render(<Cheese />);
  for (let e of cheeseStickers) {
    const name = screen.queryByText(e.name);
    expect(name).not.toBeNull();
    const image = screen.queryByAltText(e.name);
    expect(image).not.toBeNull();
  }
});

test("guild.tsx", () => {
  render(<Guild />);
  for (let e of guildStickers) {
    const name = screen.queryByText(e.name);
    expect(name).not.toBeNull();
    for (let i = 0; i < e.images.length; ++i) {
      const image = screen.queryByAltText(e.name + i.toString());
      expect(image).not.toBeNull();
    }
  }
});

test("index.tsx", () => {
  render(<Home />);
  for (let e of pageLinks) {
    const link = screen.queryByText(e.name);
    expect(link).not.toBeNull();
  }
});

test("produce.tsx", () => {
  render(<Produce />);
  for (let e of produceStickers) {
    const name = screen.queryByText(e.name);
    expect(name).not.toBeNull();
    const image = screen.queryByAltText(e.name);
    expect(image).not.toBeNull();
  }
});

test("rotation.tsx", () => {
  render(<Rotation />);
  for (let e of rotationStickers) {
    const name = screen.queryByText(e.name);
    expect(name).not.toBeNull();
    const image = screen.queryByAltText(e.name);
    expect(image).not.toBeNull();
  }
});

test("shiritori.tsx", () => {
  render(<Shiritori />);
  for (let e of shiritoriStickers) {
    const name = screen.queryByText(e.name);
    expect(name).not.toBeNull();
    const image = screen.queryByAltText(e.name);
    expect(image).not.toBeNull();
  }
});

test("valentine.tsx", () => {
  render(<Valentine />);
  for (let e of valentineStickers) {
    const name = screen.queryByText(e.name);
    expect(name).not.toBeNull();
    const image = screen.queryByAltText(e.name);
    expect(image).not.toBeNull();
  }
});
