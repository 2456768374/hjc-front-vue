import httpInstance from "@/utils/http";
function test() {
  return httpInstance({
    url: "home/test",
  });
}
