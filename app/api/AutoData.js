let ids = [];
let more = true;
let pageNumber = 1;
let status = 0;
let lastRefresh = Date.now();
let lastAccess = 0;

export function getIds() {
  return ids;
}

export function updateIds(item, isPush) {
  if (isPush) {
    ids.push(item);
  } else {
    ids = ids.filter((id) => id !== item);
  }
}

export function getMore() {
  return more;
}

export function setMore(status = false) {
  more = status;
}

export function getPagenumber() {
  return pageNumber;
}

export function setPagenumber(pgn = 1) {
  pageNumber = pgn;
}

export function getStatus() {
  return status;
}

export function setStatus(st = 0) {
  status = st;
}

export function getLastRefresh() {
  return lastRefresh;
}

export function setLastRefresh(ltr = 0) {
  lastRefresh = ltr;
}

export function isReadyForRefresh() {
  return Date.now() - lastRefresh > 86400000 && ids.length == 0;
}

export function getLastAccess() {
  return lastAccess;
}

export function setLastAccess(la) {
  lastAccess = la;
}
