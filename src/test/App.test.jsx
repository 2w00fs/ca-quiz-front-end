import '@testing-library/jest-dom'
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from "react-router-dom"
import App from "@/routes/App.jsx"

describe('App', () => {
    let container
    
    beforeEach(function () {
        container = render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        ).container
    })

    it

    
    it("Login", async () => {
        await waitFor(() => expect(container.querySelector('h1')).toHaveTextContent('LOGIN'), {timeout: 2000})
        
        await userEvent.type(container.querySelector('.username-input'), 'user')
        await waitFor(() => expect(screen.getByDisplayValue('user')).toBeInTheDocument(), { timeout: 2000 })
        
        await userEvent.type(container.querySelector('.password-input'), 'password')
        await waitFor(() => expect(screen.getByDisplayValue('password')).toBeInTheDocument(), { timeout: 2000 })
        
        await userEvent.click(container.querySelector('.login-submit-button'))
        await waitFor(() => expect(container.querySelector('h1')).toHaveTextContent('HOME'), { timeout: 2000 })
    })
    
    it('Shows HOME heading', async () => {
        await waitFor(() => expect(container.querySelector('h1')).toHaveTextContent('HOME'), {timeout: 2000})
    })

    it("Add Subject Button", async () => {
        await userEvent.click(screen.getByText('Create'))
        await waitFor(() => expect(container.querySelector('h1')).toHaveTextContent('SUBJECT'), { timeout: 2000 })
    })
})