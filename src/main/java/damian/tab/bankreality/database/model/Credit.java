package damian.tab.bankreality.database.model;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Getter
@Setter
public class Credit implements PrimaryKeyAccess {
    @Id
    @NotNull
    @GeneratedValue(generator = "credit_generator")
    @SequenceGenerator(name = "credit_generator", sequenceName = "credit_sequence", initialValue = 3000000, allocationSize = 10)
    private int id;

    @NotNull
    @Column
    private double loanAmount;

    @NotNull
    @Column
    private int interestRate;

    @NotNull
    @Column
    private int loanTime;

    @NotNull
    @Column
    private double EMI;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "login")
    private Client client;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "accountNumber")
    private Account account;

    @Override
    public int receivePrimaryKey() {
        return id;
    }

    @Override
    public void setPrimaryKey(int primaryKey) {
        id = primaryKey;
    }
}

