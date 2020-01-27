package damian.tab.bankreality.database.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.sql.Date;

@Entity
@Data
public class BankTransfer implements PrimaryKeyAccess{

    @Id
    @NotNull
    @GeneratedValue(generator = "BankTransfer_generator")
    @SequenceGenerator(name = "BankTransfer_generator", sequenceName = "BankTransfer_sequence", initialValue = 5000000, allocationSize = 10)
    private int id;

    @NotNull
    @Column
    private double transferAmount;

    @NotNull
    @Column
    private Date transferDate;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "accountNumberSender")
    private Account sender;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "accountNumberReceiver")
    private Account receiver;

    @Override
    public int receivePrimaryKey() {
        return id;
    }

    @Override
    public void setPrimaryKey(int primaryKey) {
        id = primaryKey;
    }
}
