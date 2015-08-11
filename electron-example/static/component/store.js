'use strict'

import { Queue, Store, local } from 'storage.io'

const contacts = new Store({
  name: 'contacts',
  type: 'local'
})

const msgQueueIds = new Store({
  name: 'msg-queue-ids',
  type: 'local'
})

function addContact(uid, contact) {
  contacts.set(uid, contact)
}

function getContacts() {
  return contacts.entities()
}

function addMessage(uid, message) {
  let queue = getMsgQueueById(uid)

  queue.push(message)
}

function getMsgQueueById(uid) {
  let msgQueueId = msgQueueIds.get(uid)

  let msgQueue = new Queue({
    name: uid + 'msgs',
    type: 'local'
  })

  return msgQueue
}

export {
  getMsgQueueById,
  getContacts,
  addMessage,
  addContact
}
