package damian.tab.bankreality.database.model;

import lombok.*;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@Entity
@Getter
@Setter
public class Credit implements Serializable, PrimaryKeyAccess {
//    @Id
//    @NotNull
//    @GeneratedValue(generator = "credit_generator")
//    @SequenceGenerator(name = "credit_generator", sequenceName = "credit_sequence", initialValue = 3000000, allocationSize = 10)
//    private int id;

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

//    @ManyToOne
//    @JoinColumn(name = "login")
////    @EmbeddedId
//    private Client client;

//    @ManyToOne
//    @JoinColumn(name = "accountNumber")
////    @EmbeddedId
//    private Account account;

    @EmbeddedId
    private CreditKey key;

    @Override
    public PrimaryKey receivePrimaryKey() {
        return key;
    }

    @Override
    public int receiveId() {
        return key.getId();
    }
}

