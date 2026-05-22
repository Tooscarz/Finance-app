import { Card, CardContent, CardHeader, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
MenuItem

export default function AddFunds() {
    return(
        <main className="min-h-screen flex justify-center py-10 px-5 ">
            <Card sx={{width: 400,height: 380 }}>
            <CardHeader
            sx={{textAlign: "center"}}
            title="Add Funds"
            subheader="Deposit money into your account"
            /> 
            <form className="flex flex-col gap-3">
                <div>
                    <TextField
                    fullWidth
                    label="Amount₦"
                    type="number"
                    size="small"
                    placeholder="Enter Amount"
                    id="amount"
                    /> 
                </div>
                <FormControl size="small">
                    <InputLabel id="category-label">Category</InputLabel>
                    <Select 
                    label="Category"
                    id="category"
                    labelId="category-label"
                    name="category"
                    >
                        <MenuItem value="Savings">Salary</MenuItem> 
                        <MenuItem value="Food">Food</MenuItem>
                        <MenuItem value="Rent">Rent</MenuItem>
                    </Select>
                </FormControl>
                <div>
                    <TextField
                    fullWidth
                    multiline
                    rows={3}
                    label="Description"
                    id="description"
                    size="small"
                    type="text"
                    placeholder="Description" 
                    />
                </div>
                <button type="submit" className="w-full h-13 rounded-md shadow-md text-white bg-bg-#1D4ED8">Add Funds</button> 
 
            </form>

            </Card>

        </main>
    )
}