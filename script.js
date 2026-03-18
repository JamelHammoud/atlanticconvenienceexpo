const header = document.querySelector("header");

function updatePath() {
  document.body.dataset.path = window.location.pathname;
}

function checkScroll() {
  const scrollTop = window.scrollY;

  if (scrollTop >= 5) {
    header.setAttribute("scrolled", true);
  } else {
    header.setAttribute("scrolled", false);
  }
}

updatePath();
window.addEventListener("popstate", updatePath);

const originalPushState = history.pushState.bind(history);
const originalReplaceState = history.replaceState.bind(history);

history.pushState = (...args) => {
  originalPushState(...args);
  updatePath();
};

history.replaceState = (...args) => {
  originalReplaceState(...args);
  updatePath();
};

const headerLogo = document.querySelector(".pl-header-logo");

headerLogo?.setAttribute(
  "src",
  "data:image/svg+xml;base64,PHN2ZwogICAgICAgIHdpZHRoPSIyOCIKICAgICAgICBoZWlnaHQ9IjI4IgogICAgICAgIHZpZXdCb3g9IjAgMCAyOCAyOCIKICAgICAgICBmaWxsPSJub25lIgogICAgICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgICAgPgogICAgICAgIDxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xXzEyKSI+CiAgICAgICAgICA8cGF0aAogICAgICAgICAgICBkPSJNMjUuMjQ0MiAxNEMyNS4zNjQxIDEzLjg5MzIgMjUuNDgwMyAxMy43ODQ2IDI1LjU5NDUgMTMuNjcyMkMyNy4wODIgMTIuMTg2NSAyOCAxMC4xMzMzIDI4IDcuODY0NThDMjggNS41OTU4OCAyNy4xMTc2IDMuNzI4MDkgMjUuNjk1NyAyLjMwNDNDMjQuMjczOCAwLjg4MDUwMyAyMi4zMDg2IDAgMjAuMTM3MyAwQzE3LjY5NjIgMCAxNS41MDQzIDEuMDY1OTcgMTQgMi43NTU3OUMxMy44OTMyIDIuNjM1ODkgMTMuNzg0NiAyLjUxOTc0IDEzLjY3MjIgMi40MDU0NkMxMi4xODQ3IDAuOTE3OTcxIDEwLjEyOTUgMCA3Ljg2MjcxIDBDNS41OTU4OCAwIDMuNzI2MjEgMC44ODA1MDMgMi4zMDI0MiAyLjMwNDNDMC44ODA1MDMgMy43MjYyMSAwIDUuNjkzMyAwIDcuODYyNzFDMCAxMC4zMDM4IDEuMDY0MSAxMi40OTU3IDIuNzUzOTEgMTRDMi42MzU4OSAxNC4xMDY4IDIuNTE5NzQgMTQuMjE1NCAyLjQwNTQ2IDE0LjMyNzhDMC45MTc5NzEgMTUuODEzNSAwIDE3Ljg2NjcgMCAyMC4xMzU0QzAgMjIuNDA0MSAwLjg4MDUwMyAyNC4yNzE5IDIuMzA0MyAyNS42OTU3QzMuNzI4MDkgMjcuMTE5NSA1LjY5MzMgMjggNy44NjI3MSAyOEMxMC4zMDU2IDI4IDEyLjQ5NzUgMjYuOTM0IDE0LjAwMTkgMjUuMjQ0MkMxNC4xMDY4IDI1LjM2NDEgMTQuMjE3MyAyNS40ODAzIDE0LjMyOTcgMjUuNTk0NUMxNS44MTUzIDI3LjA4MiAxNy44Njg2IDI4IDIwLjEzNzMgMjhDMjIuNDA2IDI4IDI0LjI3MzggMjcuMTE5NSAyNS42OTc2IDI1LjY5NTdDMjcuMTE5NSAyNC4yNzE5IDI4LjAwMTkgMjIuMzA2NyAyOC4wMDE5IDIwLjEzNTRDMjguMDAxOSAxNy42OTQ0IDI2LjkzNTkgMTUuNTAyNSAyNS4yNDYxIDEzLjk5ODFMMjUuMjQ0MiAxNFpNMTYuMDc1NyA4LjEyMTI0QzE2LjA3NTcgNS45MzEyMiAxNy44NTE3IDQuMTUzMzUgMjAuMDQzNiA0LjE1MzM1QzIxLjA5MjcgNC4xNTMzNSAyMi4wNDI2IDQuNTc4NjIgMjIuNzMwMSA1LjI2NjE2QzIzLjQxNzYgNS45NTM3IDIzLjg0MjkgNi45MDM1MiAyMy44NDI5IDcuOTUyNjNDMjMuODQyOSA5LjAwMTc0IDIzLjM5ODkgMTAuMDQxNSAyMi42ODE0IDEwLjc1OUMyMS45NjIgMTEuNDc4NCAyMC45NzEgMTEuOTIyNCAxOS44NzUgMTEuOTIyNEgxNi4wNzM5VjguMTIxMjRIMTYuMDc1N1pNOC4xMjEyNCAxMS45MjI0QzUuOTI5MzUgMTEuOTIyNCA0LjE1MzM1IDEwLjE0NjQgNC4xNTMzNSA3Ljk1NDVDNC4xNTMzNSA2LjkwNTM5IDQuNTgwNDkgNS45NTU1NyA1LjI2NjE2IDUuMjY4MDNDNS45NTU1NyA0LjU4MDQ5IDYuOTA1MzkgNC4xNTUyMyA3Ljk1NDUgNC4xNTUyM0M5LjAwMzYxIDQuMTU1MjMgMTAuMDQzNCA0LjU5OTIyIDEwLjc1OSA1LjMxNjc0QzExLjQ3ODQgNi4wMzYxMyAxMS45MjQzIDcuMDI3MTYgMTEuOTI0MyA4LjEyMzExVjExLjkyNDNIOC4xMjMxMUw4LjEyMTI0IDExLjkyMjRaTTExLjkyMjQgMTkuODc2OUMxMS45MjI0IDIyLjA2NjkgMTAuMTQ2NCAyMy44NDQ4IDcuOTU0NSAyMy44NDQ4QzYuOTA1MzkgMjMuODQ0OCA1Ljk1NTU3IDIzLjQxOTUgNS4yNjYxNiAyMi43MzJDNC41ODA0OSAyMi4wNDQ0IDQuMTU1MjMgMjEuMDk0NiA0LjE1NTIzIDIwLjA0NTVDNC4xNTUyMyAxOC45OTY0IDQuNTk5MjIgMTcuOTU2NiA1LjMxNjc0IDE3LjIzOTFDNi4wMzYxMyAxNi41MTk3IDcuMDI3MTYgMTYuMDc1NyA4LjEyMzExIDE2LjA3NTdIMTEuOTI0M1YxOS44NzY5SDExLjkyMjRaTTIyLjczMiAyMi43MzJDMjIuMDQyNiAyMy40MTk1IDIxLjA5NDYgMjMuODQ0OCAyMC4wNDU1IDIzLjg0NDhDMTguOTk2NCAyMy44NDQ4IDE3Ljk1NDggMjMuNDAwOCAxNy4yMzkxIDIyLjY4MzNDMTYuNTE5NyAyMS45NjM5IDE2LjA3NTcgMjAuOTcyOCAxNi4wNzU3IDE5Ljg3NjlWMTYuMDc1N0gxOS44NzVDMjIuMDY2OSAxNi4wNzU3IDIzLjg0MjkgMTcuODUxNyAyMy44NDI5IDIwLjA0MzZDMjMuODQyOSAyMS4wOTI3IDIzLjQxNzYgMjIuMDQyNiAyMi43MzAxIDIyLjczMDFMMjIuNzMyIDIyLjczMloiCiAgICAgICAgICAgIGZpbGw9IndoaXRlIgogICAgICAgICAgLz4KICAgICAgICA8L2c+CiAgICAgICAgPGRlZnM+CiAgICAgICAgICA8Y2xpcFBhdGggaWQ9ImNsaXAwXzFfMTIiPgogICAgICAgICAgICA8cmVjdCB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIGZpbGw9IndoaXRlIiAvPgogICAgICAgICAgPC9jbGlwUGF0aD4KICAgICAgICA8L2RlZnM+CiAgICAgIDwvc3ZnPgo="
);

checkScroll();
document.addEventListener("scroll", checkScroll);

const shadowHost = document.getElementById("NBFLV");

function findShadowRoot(root) {
  if (root.shadowRoot) return root.shadowRoot;
  for (const child of root.children) {
    const found = findShadowRoot(child);
    if (found) return found;
  }
  return null;
}

function waitForShadowRoot(hostId, callback, maxAttempts = 50) {
  let attempts = 0;
  const interval = setInterval(() => {
    const host = document.getElementById(hostId);
    const shadowRoot = host ? findShadowRoot(host) : null;
    if (shadowRoot) {
      clearInterval(interval);
      callback(shadowRoot);
    } else if (++attempts >= maxAttempts) {
      clearInterval(interval);
    }
  }, 100);
}

waitForShadowRoot("NBFLV", (shadowRoot) => {
  const logoTrack = shadowRoot.querySelector("#hero-sponsor-logos .logo-track");

  if (!logoTrack) return;

  const logos = logoTrack.querySelectorAll("img");
  logos.forEach((logo) => {
    const clone = logo.cloneNode(true);
    logoTrack.appendChild(clone);
  });
});
