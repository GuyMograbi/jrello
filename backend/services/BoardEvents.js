'use strict'
/**
 *
 * <pre>
 * var boardEvents = require('BoardEvents');
 * boardEvents.emitter.boardUpdate( thisBoard );
 * boardEvents.emitter.on(boardEvents.EVENTS.BOARD_UPDATE, function(board){
 *    Do something with board
 * })
 * </pre>
 */

const EventEmitter = require('events')

class MyEmitter extends EventEmitter {
  boardUpdated (board) {
    this.emit('boardUpdate', board)
  }
}

exports.emitter = new MyEmitter()
exports.EVENTS = {
  BOARD_UPDATE: 'boardUpdate'
}
