const { sum, pq } = require("./calc");

test("adds 1 + 2 to equal 3", () => {
  //Texen kan vara den man vill
  expect(sum(1, 2)).toBe(3);
});
test("test pq with 2-3 to be 1,-3", () => {
  //Texen kan vara den man vill
  expect(pq(2, -3)).toBe("1,-3");
});
const puppeteer = require("puppeteer");
test("Vad som ska göras", async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 70,
    args: ["--window-size=1920, 1080"]
  });
  const page = await browser.newPage();
  await page.goto(
    "file:///C:/Users/zakarias.wieslander/Documents/arbete/Mattesida/Ny%20mapp/mattesidan-master/mattesidan-master/index.html"
  );
  // vad som ska göras på sidan
  await page.click("#p");
  await page.type("#p", "2");

  await page.type("#q", "-3");
  await page.click("#submit");

  const final_result = await page.$eval("#svar", el => el.textContent);
  await expect(final_result).toBe("1,-3");
});
