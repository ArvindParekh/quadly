
/* !!! This is code generated by Prisma. Do not edit directly. !!!
/* eslint-disable */

Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.9.0
 * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
 */
Prisma.prismaVersion = {
  client: "6.9.0",
  engine: "81e4af48011447c3cc503a190e86995b66d2a28e"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  username: 'username',
  password: 'password',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.UserDetailsScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  name: 'name',
  department: 'department',
  year: 'year',
  profilePicture: 'profilePicture',
  bio: 'bio',
  availability: 'availability',
  reading: 'reading'
};

exports.Prisma.PostScalarFieldEnum = {
  id: 'id',
  authorId: 'authorId',
  content: 'content',
  commentCount: 'commentCount',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ReactionScalarFieldEnum = {
  id: 'id',
  postId: 'postId',
  likes: 'likes',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CommentScalarFieldEnum = {
  id: 'id',
  postId: 'postId',
  authorId: 'authorId',
  commentContent: 'commentContent',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PostTagScalarFieldEnum = {
  id: 'id',
  tagName: 'tagName',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.NotificationScalarFieldEnum = {
  id: 'id',
  userDetailsId: 'userDetailsId',
  notificationType: 'notificationType',
  notificationData: 'notificationData',
  read: 'read',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.InterestScalarFieldEnum = {
  id: 'id',
  interestName: 'interestName'
};

exports.Prisma.MatchScalarFieldEnum = {
  id: 'id',
  inviterId: 'inviterId',
  inviteeId: 'inviteeId',
  matchScore: 'matchScore',
  matchStatus: 'matchStatus',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.UserSimilarityScalarFieldEnum = {
  id: 'id',
  currentUserId: 'currentUserId',
  otherUserId: 'otherUserId',
  similarityScore: 'similarityScore',
  factors: 'factors',
  createdAt: 'createdAt'
};

exports.Prisma.EventScalarFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  location: 'location',
  date: 'date',
  time: 'time',
  category: 'category',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CoffeeChatScalarFieldEnum = {
  id: 'id',
  inviterId: 'inviterId',
  inviteeId: 'inviteeId',
  purposeId: 'purposeId',
  venueId: 'venueId',
  scheduledAt: 'scheduledAt',
  duration: 'duration',
  personalMessage: 'personalMessage',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CoffeeChatPurposeScalarFieldEnum = {
  id: 'id',
  purposeName: 'purposeName',
  description: 'description',
  timeLimit: 'timeLimit'
};

exports.Prisma.CoffeeChatVenueScalarFieldEnum = {
  id: 'id',
  venueName: 'venueName',
  noiseLevel: 'noiseLevel',
  description: 'description',
  location: 'location',
  rating: 'rating',
  tags: 'tags'
};

exports.Prisma.ChatScalarFieldEnum = {
  id: 'id',
  user1Id: 'user1Id',
  user2Id: 'user2Id',
  name: 'name'
};

exports.Prisma.MessageScalarFieldEnum = {
  id: 'id',
  chatId: 'chatId',
  senderId: 'senderId',
  content: 'content',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.NotificationType = exports.$Enums.NotificationType = {
  LIKE: 'LIKE',
  COMMENT: 'COMMENT',
  MATCH: 'MATCH',
  MESSAGE: 'MESSAGE',
  EVENT_REMINDER: 'EVENT_REMINDER',
  SYSTEM_MESSAGE: 'SYSTEM_MESSAGE'
};

exports.MatchStatus = exports.$Enums.MatchStatus = {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED'
};

exports.CoffeeChatStatus = exports.$Enums.CoffeeChatStatus = {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED'
};

exports.CoffeeChatVenueNoiseLevel = exports.$Enums.CoffeeChatVenueNoiseLevel = {
  QUIET: 'QUIET',
  MODERATE: 'MODERATE',
  LIVELY: 'LIVELY'
};

exports.CoffeeChatVenueTags = exports.$Enums.CoffeeChatVenueTags = {
  OUTDOOR: 'OUTDOOR',
  SCENIC: 'SCENIC',
  FRESH_AIR: 'FRESH_AIR',
  WIFI: 'WIFI',
  OUTLETS: 'OUTLETS',
  WHITEBOARDS: 'WHITEBOARDS',
  PRIVATE: 'PRIVATE',
  FOOD: 'FOOD',
  COMFORTABLE_SEATING: 'COMFORTABLE_SEATING',
  BOOKS: 'BOOKS'
};

exports.Prisma.ModelName = {
  User: 'User',
  UserDetails: 'UserDetails',
  Post: 'Post',
  Reaction: 'Reaction',
  Comment: 'Comment',
  PostTag: 'PostTag',
  Notification: 'Notification',
  Interest: 'Interest',
  Match: 'Match',
  UserSimilarity: 'UserSimilarity',
  Event: 'Event',
  CoffeeChat: 'CoffeeChat',
  CoffeeChatPurpose: 'CoffeeChatPurpose',
  CoffeeChatVenue: 'CoffeeChatVenue',
  Chat: 'Chat',
  Message: 'Message'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
