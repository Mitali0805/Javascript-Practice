test@@ <ref *1> Query {
  _events: [Object: null prototype] {
    error: [Function (anonymous)],
    packet: [Function (anonymous)],
    timeout: [Function (anonymous)],
    end: [Function (anonymous)]
  },
  _eventsCount: 4,
  _maxListeners: undefined,
  _callback: undefined,
  _callSite: Error
      at Protocol._enqueue (C:\Users\mdipakpa\Documents\Project\Caesars\Caesars_Git\RaaS-NodeJS-MicroService-ManageIndividual-Alpha\node_modules\mysql\lib\protocol\Protocol.js:144:48)
      at PoolConnection.query (C:\Users\mdipakpa\Documents\Project\Caesars\Caesars_Git\RaaS-NodeJS-MicroService-ManageIndividual-Alpha\node_modules\mysql\lib\Connection.js:198:25)
      at IndividualRepository.createIndividual (C:\Users\mdipakpa\Documents\Project\Caesars\Caesars_Git\RaaS-NodeJS-MicroService-ManageIndividual-Alpha\repository\individual.repository.js:31:41)
      at processTicksAndRejections (internal/process/task_queues.js:97:5)
      at async IndividualService.createIndividualAndReward (C:\Users\mdipakpa\Documents\Project\Caesars\Caesars_Git\RaaS-NodeJS-MicroService-ManageIndividual-Alpha\service\individual.service.js:74:29)
      at async IndividualService.createIndividualReward (C:\Users\mdipakpa\Documents\Project\Caesars\Caesars_Git\RaaS-NodeJS-MicroService-ManageIndividual-Alpha\service\individual.service.js:55:30),
  _ended: false,
  _timeout: undefined,
  _timer: Timer { _object: [Circular *1], _timeout: null },
  sql: 'insert into individual123(\n' +
    '            uid, first_name, last_name, middle_name, preferred_name, date_of_birth, created_by,\n' + 
    '            first_name_hash, last_name_hash, middle_name_hash, preferred_name_hash, date_of_birth_hash)\n' +
    "            VALUES(1004242, 'q1LbJBJBVPwlp6lhef+tGng0I0QHp8MeMvBxmATUXLc=', 'oEhWuRSyveSXy1Q0SQHCc7eO3P5H1VjmfxA2mZmKQTu7sOOEGLoSulUjef40thLG', 'LVW5NoIjx6pUO2yjlU0UW8HgoyJTCE6ir3EDNpNlAhk=', 'Z8tNTqJ89HglWw/Kqna0dK7cf6AbKkMdjjSojMVZeXA=', 'H68ojUbltSB41SY1cxquBRBOezm30UHK8Y38A79lnY4=', 'createuser', 'aaada39187d93727c8c69c5d0fd0b95ea427c1e5367529c6ad38ab4fff1a80fe', '597ea037f87be304c01b9621f1b0fa06e3c9ceb489db185dd9b555868b4b929b', 'ad114af8d97ed1777ecea1cfa3b1b5fab4f75d75957abcc043573f3e075096c8', '050535b9f9e95ec05f0380953d372425e9c53f16fbbc9fcd70e2cbdfba34f2bc', '69994a99e7cc9643f5ead6a471cf5fb526400c1b6b8613c6e5b0ad18dcf4e88c');",
  values: [
    1004242,
    'q1LbJBJBVPwlp6lhef+tGng0I0QHp8MeMvBxmATUXLc=',
    'oEhWuRSyveSXy1Q0SQHCc7eO3P5H1VjmfxA2mZmKQTu7sOOEGLoSulUjef40thLG',
    'LVW5NoIjx6pUO2yjlU0UW8HgoyJTCE6ir3EDNpNlAhk=',
    'Z8tNTqJ89HglWw/Kqna0dK7cf6AbKkMdjjSojMVZeXA=',
    'H68ojUbltSB41SY1cxquBRBOezm30UHK8Y38A79lnY4=',
    'createuser',
    'aaada39187d93727c8c69c5d0fd0b95ea427c1e5367529c6ad38ab4fff1a80fe',
    '597ea037f87be304c01b9621f1b0fa06e3c9ceb489db185dd9b555868b4b929b',
    'ad114af8d97ed1777ecea1cfa3b1b5fab4f75d75957abcc043573f3e075096c8',
    '050535b9f9e95ec05f0380953d372425e9c53f16fbbc9fcd70e2cbdfba34f2bc',
    '69994a99e7cc9643f5ead6a471cf5fb526400c1b6b8613c6e5b0ad18dcf4e88c'
  ],
  typeCast: true,
  nestTables: false,
  _resultSet: null,
  _results: [],
  _fields: [],
  _index: 0,
  _loadError: null,
  _connection: <ref *2> PoolConnection {
    _events: [Object: null prototype] {
      end: [Function: _removeFromPool],
      error: [Function (anonymous)]
    },
    _eventsCount: 2,
    _maxListeners: undefined,
    config: ConnectionConfig {
      host: 'svc-8fd7a992-b480-4024-a19f-7212786e2c2d-ddl.aws-oregon-1.svc.singlestore.com',
      port: 3306,
      localAddress: undefined,
      socketPath: undefined,
      user: 'admin',
      password: '-bsy)bGrpYDRHAceAMc?',
      database: 'CAESARS_WRITE',
      connectTimeout: 10000,
      insecureAuth: false,
      supportBigNumbers: false,
      bigNumberStrings: false,
      dateStrings: false,
      debug: undefined,
      trace: true,
      stringifyObjects: false,
      timezone: 'local',
      flags: '',
      queryFormat: undefined,
      pool: [Pool],
      ssl: false,
      localInfile: true,
      multipleStatements: false,
      typeCast: true,
      maxPacketSize: 0,
      charsetNumber: 33,
      clientFlags: 455631,
      protocol41: true
    },
    _socket: Socket {
      connecting: false,
      _hadError: false,
      _parent: null,
      _host: 'svc-8fd7a992-b480-4024-a19f-7212786e2c2d-ddl.aws-oregon-1.svc.singlestore.com',
      _readableState: [ReadableState],
      _events: [Object: null prototype],
      _eventsCount: 4,
      _maxListeners: undefined,
      _writableState: [WritableState],
      allowHalfOpen: false,
      _sockname: null,
      _pendingData: null,
      _pendingEncoding: '',
      server: null,
      _server: null,
      timeout: 0,
      [Symbol(asyncId)]: 125,
      [Symbol(kHandle)]: [TCP],
      [Symbol(kSetNoDelay)]: false,
      [Symbol(lastWriteQueueSize)]: 0,
      [Symbol(timeout)]: Timeout {
        _idleTimeout: -1,
        _idlePrev: null,
        _idleNext: null,
        _idleStart: 6359,
        _onTimeout: null,
        _timerArgs: undefined,
        _repeat: null,
        _destroyed: true,
        [Symbol(refed)]: false,
        [Symbol(asyncId)]: 128,
        [Symbol(triggerId)]: 95
      },
      [Symbol(kBuffer)]: null,
      [Symbol(kBufferCb)]: null,
      [Symbol(kBufferGen)]: null,
      [Symbol(kCapture)]: false,
      [Symbol(kBytesRead)]: 0,
      [Symbol(kBytesWritten)]: 0
    },
    _protocol: Protocol {
      _events: [Object: null prototype],
      _eventsCount: 7,
      _maxListeners: undefined,
      readable: true,
      writable: true,
      _config: [ConnectionConfig],
      _connection: [Circular *2],
      _callback: null,
      _fatalError: null,
      _quitSequence: null,
      _handshake: true,
      _handshaked: true,
      _ended: false,
      _destroyed: false,
      _queue: [Array],
      _handshakeInitializationPacket: [HandshakeInitializationPacket],
      _parser: [Parser],
      [Symbol(kCapture)]: false
    },
    _connectCalled: true,
    state: 'authenticated',
    threadId: 24923298,
    _pool: Pool {
      _events: [Object: null prototype] {},
      _eventsCount: 0,
      _maxListeners: undefined,
      config: [PoolConfig],
      _acquiringConnections: [],
      _allConnections: [Array],
      _freeConnections: [Array],
      _connectionQueue: [],
      _closed: false,
      query: [Function (anonymous)],
      getConnection: [Function (anonymous)],
      [Symbol(kCapture)]: false
    },
    [Symbol(kCapture)]: false
  },
  [Symbol(kCapture)]: false
}