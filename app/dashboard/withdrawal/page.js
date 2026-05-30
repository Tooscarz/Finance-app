import { Card, CardContent, CardHeader, TextField } from "@mui/material"
TextField

export default function Withdrawal() {
    return(
        <main className="min-h-screen flex justify-center items-center py-10 px-20">
          <card sx={{width: "380", height: 300}} >
                <CardHeader sx={{textAlign: "center"}}
                title="Withdraw Funds" 
                subheader="Withdraw money from your account"
                />
            
            <CardContent>
                <form className="flex flex-col gap-4">
                  <div>
                    <TextField
                    fullWidth
                    size="small"
                    id="amount"
                    label="Withdrawal Amount"
                    type="number"
                    placeholder="Enter amount to withdraw"
                    />
                  </div>
                  <div>
                    <TextField
                    fullWidth
                    multiline
                    rows={2}
                    type="text"
                    id="description"
                    label="Description"
                    placeholder="Enter withdrawal notes"
                    />
                  </div>
                  <button className="w-full h-10 bg-[#1D4ED8] text-white rounded-md" type="submit">Withdraw Funds</button>
                </form>
            </CardContent>
          </card> 
        </main>
    )
} 