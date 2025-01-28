const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); 

const app = express();
const port = 8080;

// Connect to MongoDB
mongoose.connect('mongodb+srv://gattushiva:gattushiva@cluster0.fjsmupv.mongodb.net/empoyee?retryWrites=true&w=majority&appName=Cluster0')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Middleware

app.use(express.json())
app.use(cors())

// Define Employee Schema
const employeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }, 
    role: { type: String, required: true }
});

const Employee = mongoose.model('Employee', employeeSchema);

// Routes
app.get('/employees', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/employees/:id', getEmployee, (req, res) => {
    res.json(res.employee);
});

app.post('/empolyee', async (req, res) => {
    const employee = new Employee({
        name: req.body.name,
        email: req.body.email,
        role: req.body.role
    });

    try {
        const newEmployee = await employee.save();
        res.status(201).json(newEmployee);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.put('/employees/:id', getEmployee, async (req, res) => {
    if (req.body.name != null) {
        res.employee.name = req.body.name;
    }
    if (req.body.email != null) {
        res.employee.email = req.body.email;
    }
    if (req.body.role != null) {
        res.employee.role = req.body.role;
    }

    try {
        const updatedEmployee = await res.employee.save();
        res.json(updatedEmployee);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.delete('/employees/:id', getEmployee, async (req, res) => {
    try {
        await res.employee.remove();
        res.json({ message: 'Employee Deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function getEmployee(req, res, next) {
    let employee;
    try {
        employee = await Employee.findById(req.params.id);
        if (employee == null) {
            return res.status(404).json({ message: 'Cannot find employee' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.employee = employee;
    next();
}

app.get("/",(req,res)=>{
    res.send("API is working")
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});