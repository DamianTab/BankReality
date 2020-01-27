package damian.tab.bankreality.database.model;

import lombok.Data;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.sql.Date;

@Entity
@Data
public class Account implements PrimaryKeyAccess {
    @Id
    @NotNull
    @GeneratedValue(generator = "account_generator")
    @SequenceGenerator(name = "account_generator", sequenceName = "account_sequence", initialValue = 2000000, allocationSize = 10)
    private int accountNumber;

    @NotNull
    @Column
    private double balance;

    @NotNull
    @Column
    private double feesAmount;

    @Column
    @Type(type = "date")
    private Date creationDate;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "login")
    private Client client;

    @Override
    public int receivePrimaryKey() {
        return accountNumber;
    }

    @Override
    public void setPrimaryKey(int primaryKey) {
        accountNumber = primaryKey;
    }
}
