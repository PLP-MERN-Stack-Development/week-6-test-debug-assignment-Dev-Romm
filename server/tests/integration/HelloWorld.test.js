import request from 'supertest';
import app from '../../app';

describe('HelloWorld Integration Tests', () => {
    it('should return a hello world message', async () => {
        const response = await request(app).get('/api/hello');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Hello World');
    });
});