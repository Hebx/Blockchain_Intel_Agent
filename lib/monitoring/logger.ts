/**
 * Logging utilities for Web3 Agent
 * Provides structured logging with context
 */

export interface LogContext {
  query?: string;
  queryType?: string;
  duration?: number;
  cacheHit?: boolean;
  error?: Error;
  userId?: string;
  conversationId?: string;
  [key: string]: any;
}

export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
}

class Logger {
  private minLevel: LogLevel;
  private format: 'json' | 'simple';

  constructor(minLevel: LogLevel = LogLevel.INFO, format: 'json' | 'simple' = 'simple') {
    this.minLevel = minLevel;
    this.format = format;
  }

  /**
   * Log debug message
   */
  debug(message: string, context?: LogContext): void {
    this.log(LogLevel.DEBUG, message, context);
  }

  /**
   * Log info message
   */
  info(message: string, context?: LogContext): void {
    this.log(LogLevel.INFO, message, context);
  }

  /**
   * Log warning
   */
  warn(message: string, context?: LogContext): void {
    this.log(LogLevel.WARN, message, context);
  }

  /**
   * Log error
   */
  error(message: string, error?: Error | string, context?: LogContext): void {
    const errorContext: LogContext = {
      ...context,
      error: error instanceof Error ? error : undefined,
      errorMessage: typeof error === 'string' ? error : undefined,
    };
    this.log(LogLevel.ERROR, message, errorContext);
  }

  /**
   * Log query execution
   */
  logQuery(query: string, duration: number, success: boolean, context?: LogContext): void {
    this.info('Query executed', {
      ...context,
      query,
      duration,
      success,
      timestamp: new Date().toISOString(),
    });
  }

  /**
   * Log cache operation
   */
  logCache(type: 'hit' | 'miss', key: string, context?: LogContext): void {
    this.debug(`Cache ${type}`, {
      ...context,
      cacheKey: key,
      cacheType: type,
    });
  }

  /**
   * Log API call
   */
  logAPICall(
    endpoint: string,
    method: string,
    status: number,
    duration: number,
    context?: LogContext,
  ): void {
    this.info('API call', {
      ...context,
      endpoint,
      method,
      status,
      duration,
    });
  }

  /**
   * Core logging method
   */
  private log(level: LogLevel, message: string, context?: LogContext): void {
    if (level < this.minLevel) return;

    const timestamp = new Date().toISOString();
    const logEntry = {
      level: LogLevel[level],
      timestamp,
      message,
      ...context,
    };

    if (this.format === 'json') {
      console.log(JSON.stringify(logEntry));
    } else {
      const prefix = `[${timestamp}] [${LogLevel[level]}]`;
      console.log(`${prefix} ${message}`, context || '');
    }

    // In production, send to logging service
    // await sendToLoggingService(logEntry);
  }
}

// Singleton instance
const logger = new Logger(
  (process.env.LOG_LEVEL as LogLevel) || LogLevel.INFO,
  process.env.LOG_FORMAT === 'json' ? 'json' : 'simple',
);

export default logger;

/**
 * Convenience functions
 */
export const logQuery = (query: string, duration: number, success: boolean, context?: LogContext) => {
  logger.logQuery(query, duration, success, context);
};

export const logCache = (type: 'hit' | 'miss', key: string, context?: LogContext) => {
  logger.logCache(type, key, context);
};

export const logError = (message: string, error?: Error | string, context?: LogContext) => {
  logger.error(message, error, context);
};

export const logAPI = (
  endpoint: string,
  method: string,
  status: number,
  duration: number,
  context?: LogContext,
) => {
  logger.logAPICall(endpoint, method, status, duration, context);
};

