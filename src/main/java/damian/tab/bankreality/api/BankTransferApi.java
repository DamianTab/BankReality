package damian.tab.bankreality.api;

import damian.tab.bankreality.database.model.BankTransfer;
import damian.tab.bankreality.database.model.Investment;
import damian.tab.bankreality.database.repository.BankTransferRepository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/transfer")
@RestController
public class BankTransferApi extends GenericRESTApi<BankTransfer> {
    public BankTransferApi(JpaRepository<BankTransfer, Integer> dao) {
        super(dao);
    }

    @PostMapping("/make")
    public void makeTransfer(
            @RequestParam(value = "amount") Double amount,
            @RequestParam(value = "sender") Integer sender,
            @RequestParam(value = "receiver") Integer receiver
    ) {
        ((BankTransferRepository) dao).makeTransfer(amount, sender, receiver);
    }

}
